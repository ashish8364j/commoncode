const multer = require('multer')

const storage = multer.diskStorage({
  //null = error(matlab no error)
    destination: function (req, file, cb) {
      cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  //This upload variable can now be used as middleware in specific routes to handle file uploads.
  const upload = multer({ storage: storage })

  module.exports = upload ;