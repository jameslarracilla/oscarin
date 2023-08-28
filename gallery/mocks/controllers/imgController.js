const path = require('path');
const fs = require('fs');

exports.imgController = (req, res) => {
  const { id } = req.params;
  const imgPath = path.resolve(__dirname, `assets/${id}`);

  if (!fs.existsSync(imgPath)) {
    const defaultImgPath = path.resolve(__dirname, 'assets/default.jpg');
    return res.status(200).sendFile(defaultImgPath);
  }

  res.status(200).sendFile(imgPath);
};
