let url = "https://jsonplaceholder.typicode.com/"
//Veeer
async function obtenerUsuarios(){
    let usuariosPedidos = await fetch(`${url}users`)
    let usuarios = await usuariosPedidos.json()
    return{usuarios}     
}
async function obtenerPosts(){
    let usuariosPedidos = await fetch(`${url}users`)
    let usuarios = await usuariosPedidos.json()
    let usuarios_id = usuarios[7].id
    let postsPedidos = await fetch(`${url}posts?userId=${usuarios_id}`)
    let posts = await postsPedidos.json()
    return{posts}
}
async function obtenerComentarios(){
    let comentarios_response
}
obtenerUsuarios()
    .then(data=>{
        console.log(data)
    })

obtenerPosts()
    .then(data=>{
        console.log(data)
    })