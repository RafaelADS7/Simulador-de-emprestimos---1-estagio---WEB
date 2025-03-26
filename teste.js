function mostrarResultados() {
    // Cria o layout em grid
    const gridHTML = `
        <div class="central">
            <div class="container">
                <header>
                    <h1>Resultados do Empréstimo</h1>
                </header>
                <div class="grid-container">
                    <div class="grid-item">Numeros</div>
                    <div class="grid-item">Valor</div>
                    <div class="grid-item">Quantidade de parcelas</div>
                    <div class="grid-item">Total</div>
                    <div class="grid-item">1</div>
                    <div class="grid-item">2000</div>
                    <div class="grid-item">12</div>
                    <div class="grid-item">2450</div>
                </div>
            </div>
        </div>
    `;

    // Substitui o conteúdo atual com o grid
    document.body.innerHTML = gridHTML;
}
