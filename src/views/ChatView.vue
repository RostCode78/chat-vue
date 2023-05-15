<template>
    <!-- <div class="container-titulo">
        <div class="icon">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" alt="Imagen de perfil">
        </div>
        <div class="text">
            <h1>Jhonattan Tunales</h1>
            <p>Activo en este momento</p>
        </div>
    </div> -->
    <div class="content-chat">
        <div class="container-contacto">

            <div class="item-contacto" v-for="cont in contacto" :key="cont.id">
                <div class="left">
                    <div class="icon">
                        <img :src="`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${cont.id}.png`" alt="Imagen de perfil">
                    </div>
                </div>
                <div class="right">
                    <h3>Nombre de contacto</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>

        </div>
        <div class="container-chat">
            <div class="content-mensajes">
                <div class="item-mensaje left">
                    <p>Persona 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi recusandae aspernatur hic.</p>
                </div>
                <div class="item-mensaje left">
                    <p>Persona 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi recusandae aspernatur hic.</p>
                </div>
                <div class="item-mensaje right">
                    <p>Persona 2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem temporibus voluptate aliquid et! Suscipit molestiae eius voluptatum ducimus. Eius praesentium iste cumque fuga magnam magni.</p>
                </div>
                <div class="item-mensaje left">
                    <p>Persona 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi recusandae aspernatur hic.</p>
                </div>
                <div class="item-mensaje right">
                    <p>Persona 2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi recusandae aspernatur hic.</p>
                </div>
                <div class="item-mensaje right">
                    <p>Persona 2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi recusandae aspernatur hic.</p>
                </div>
                <div class="item-mensaje left">
                    <p>Persona 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi recusandae aspernatur hic.</p>
                </div>
            </div>
            <div class="content-texto">
                <form>
                    <input type="file" class="input-file" id="img">
                    <label for="img">
                        <p>Agregar Imagen</p>
                    </label>
                    <input type="text">
                    <button>
                        <p>Enviar</p>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            contacto: [
                {
                    id: 1,
                    nombre: "HOLA AMIGO",
                    texto: "Lorem ipsum dolor sit amet consectetur adipisicing."
                },
                {
                    id: 2,
                    nombre: "HOLA AMIGO",
                    texto: "Lorem ipsum dolor sit amet consectetur adipisicing."
                },
                {
                    id: 3,
                    nombre: "HOLA AMIGO",
                    texto: "Lorem ipsum dolor sit amet consectetur adipisicing."
                },
                {
                    id: 4,
                    nombre: "HOLA AMIGO",
                    texto: "Lorem ipsum dolor sit amet consectetur adipisicing."
                },
                {
                    id: 5,
                    nombre: "HOLA AMIGO",
                    texto: "Lorem ipsum dolor sit amet consectetur adipisicing."
                },
                {
                    id: 6,
                    nombre: "HOLA AMIGO",
                    texto: "Lorem ipsum dolor sit amet consectetur adipisicing."
                },
                {
                    id: 7,
                    nombre: "HOLA AMIGO",
                    texto: "Lorem ipsum dolor sit amet consectetur adipisicing."
                },
                {
                    id: 8,
                    nombre: "HOLA AMIGO",
                    texto: "Lorem ipsum dolor sit amet consectetur adipisicing."
                },
                {
                    id: 9,
                    nombre: "HOLA AMIGO",
                    texto: "Lorem ipsum dolor sit amet consectetur adipisicing."
                },
            ]
            }
        }
    }
</script>