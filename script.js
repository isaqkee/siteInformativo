document.addEventListener("DOMContentLoaded", function () {
    // IntersectionObserver para elementos com fade-in
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    // Selecionar apenas os elementos que devem ter o efeito fade-in
    const fadeElements = document.querySelectorAll('.fade-in:not(.no-fade)');
    fadeElements.forEach((el) => observer.observe(el));

    // Modal
    const enviarButton = document.querySelector(".enviar");
    const modal = document.getElementById("modal");
    const closeModalButton = document.getElementById("close-modal");
    const inputs = document.querySelectorAll(".formulario .input");

    if (enviarButton) {
        enviarButton.addEventListener("click", function (event) {
            event.preventDefault(); // Impede o envio do formulário

            // Validação dos campos
            let isValid = true;
            inputs.forEach((input) => {
                if (input.value.trim() === "") {
                    isValid = false;
                    input.classList.add("input-error"); // Adiciona classe de erro
                } else {
                    input.classList.remove("input-error"); // Remove classe de erro
                }
            });

            if (isValid) {
                // Exibir o modal se todos os campos estiverem preenchidos
                modal.style.display = "flex";
            } else {
                alert("Por favor, preencha todos os campos obrigatórios."); // Alerta para campos vazios
            }
        });
    }

    if (closeModalButton) {
        closeModalButton.addEventListener("click", function () {
            modal.style.display = "none";
        });
    }

    // Fechar o modal ao clicar fora dele
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
