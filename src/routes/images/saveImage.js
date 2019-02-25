const multer = require("multer");
const fs = require("fs");
const path = require("path");
const util = require("util");

const { usersSrc } = require("./pathes");
const { getUserNameById } = require("./helpers");

const renameFile = util.promisify(fs.rename);

const TEMP_IMAGE_FOLDER = path.join(__dirname, "../../../tmp");

const storage = multer.diskStorage({
  // определяем папку куда сохранять временное изображение

  destination: (req, file, next) => {
    next(null, TEMP_IMAGE_FOLDER);
  },
  // определяем имя файла
  filename: (req, file, next) => {
    next(null, file.originalname);
  }
});

// Применяем настройки
const upload = multer({ storage });

const moveImage = (fileObject, userId) => {
  const userName = getUserNameById(userId);

  //  cоздаем папку для файлов пользователя
  const userImageFolderName = "user-images";

  const userImagePath = path.join(usersSrc, userName, userImageFolderName);

  if (!fs.existsSync(userImagePath)) {
    fs.mkdirSync(userImagePath);
  }

  const tempFilePath = path.join(TEMP_IMAGE_FOLDER, fileObject.originalname);
  const newFilePath = path.join(userImagePath, fileObject.originalname);

  return renameFile(tempFilePath, newFilePath)
    .then(() => userImageFolderName)
    .catch(error => console.log(error));
};

const saveImage = (req, res) => {
  // Берем файл
  const fileObject = req.file;

  // Берем другие данные что пришли
  const userId = req.body.userId;
  console.log(userId);
  const userName = getUserNameById(userId);
  console.log(userId);
  if (!userName)
    return res.json({
      status: `failed. User with such ID is not found`
    });

  moveImage(fileObject, userId).then(userImageFolderName => {
    res.json({
      status: `was saved in folder: db/users/${userName}/${userImageFolderName}`
    });
  });
};

// добавляем промежуточный обработчик для post-multipart запросов
module.exports = () => [upload.single("file"), saveImage];
