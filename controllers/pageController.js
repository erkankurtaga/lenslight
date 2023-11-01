const getIndexPage = (req, res) => {
  res.render('index', { link: 'index' })
}

const getAboutPage = (req, res) => {
  res.render('about', { link: 'about' })
}

const getServicesPage = (req, res) => {
  res.render('services', { link: 'services' })
}

const getProjectsPage = (req, res) => {
  res.render('projects', { link: 'projects' })
}

const getBlogPage = (req, res) => {
  res.render('blog', { link: 'blog' })
}

const getContactPage = (req, res) => {
  res.render('contact', { link: 'contact' })
}

const getRegisterPage = (req, res) => {
  res.render('register', { link: 'register' })
}


export {
  getIndexPage,
  getAboutPage,
  getServicesPage,
  getProjectsPage,
  getBlogPage,
  getContactPage,
  getRegisterPage
}
