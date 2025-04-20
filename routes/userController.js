const User = require('../models/User');

// گرفتن اطلاعات پروفایل
const getProfile = async (req, res) => {
  const { phone } = req.params;

  try {
    const user = await User.findOne({ phone });

    if (!user) {
      return res.status(404).json({ message: 'کاربر پیدا نشد' });
    }

    // فقط اطلاعات لازم رو می‌فرستیم
    res.json({
      name: user.name,
      phone: user.phone,
      email: user.email,
      image: user.image
    });
  } catch (error) {
    res.status(500).json({ message: 'خطا در دریافت پروفایل کاربر' });
  }
};

module.exports = {
  getProfile,
};
