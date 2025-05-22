// metrics.js
const client = require('prom-client');
client.collectDefaultMetrics({ timeout: 5000 });

// تعداد کاربران
const usersGauge = new client.Gauge({
    name: 'app_users_total',
    help: 'Total number of users'
});

// تعداد درخواست‌ها
const requestCounter = new client.Counter({
    name: 'http_requests_total',
    help: 'Total HTTP requests',
    labelNames: ['method', 'route', 'statusCode']
});

// ترافیک ورودی (به صورت دستی)
const trafficIncomingBytes = new client.Counter({
    name: 'app_traffic_in_bytes',
    help: 'Total incoming traffic in bytes'
});

// آپتایم
const uptimeGauge = new client.Gauge({
    name: 'process_uptime_seconds',
    help: 'Process uptime in seconds'
});
setInterval(() => {
    uptimeGauge.set(process.uptime());
}, 10000);

// بروزرسانی تعداد کاربران (دیتابیس تو)
async function updateUserCount(getUserCountFn) {
    const count = await getUserCountFn();
    usersGauge.set(count);
}

function recordRequest(req, res) {
    res.on('finish', () => {
        requestCounter.inc({
            method: req.method,
            route: req.route?.path || req.path || 'unknown',
            statusCode: res.statusCode
        });
    });

    let size = 0;
    req.on('data', chunk => (size += chunk.length));
    req.on('end', () => {
        trafficIncomingBytes.inc(size);
    });
}

module.exports = {
    client,
    updateUserCount,
    recordRequest
};
