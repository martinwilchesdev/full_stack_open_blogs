// recibe un array de publicaciones de blog como parametro y siempre devuelve el valor de 1
const dummy = (blogs) => 1

// recibe un array de publicaciones y retorna la suma total de likes de las publicaciones contenidas
const totalLikes = (blogs) => blogs.reduce((a, b) => a + b.likes, 0)

// recibe un array de publicaciones y retorna la publicacion con mas likes
const favoriteBlog = (blogs) => {
    return blogs.reduce((max, blog) => (blog.likes > max.likes ? blog : max), blogs[0])
}

module.exports = { dummy, totalLikes, favoriteBlog }