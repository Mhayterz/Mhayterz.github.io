onload = () => {
    document.body.classList.remove("container");
    const audio = new Audio('sound/ChristianBasso&HaienQiu-Flowers.mp3');
    audio.play().catch(error => {
        console.log("No se pudo reproducir el audio: ", error);
    });
};