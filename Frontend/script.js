// === DATOS SIMULADOS (Mock Data) ===
let historialData = [
    { id: 1, texto: "El servicio fue excelente, me encantó la rapidez.", prevision: 'positivo', probabilidad: 0.98 },
    { id: 2, texto: "No estoy seguro si volvería, fue regular.", prevision: 'neutro', probabilidad: 0.55 },
    { id: 3, texto: "Pésima atención, tardaron horas.", prevision: 'negativo', probabilidad: 0.89 },
    { id: 4, texto: "Muy buena calidad del producto.", prevision: 'positivo', probabilidad: 0.92 }
];

// Inicializar al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    renderCharts();
    filtrarHistorial('todos');
    actualizarContadores();
});

// === GENERACIÓN DE GRÁFICOS (Chart.js) ===
function renderCharts() {
    // 1. Gráfico de Torta (Distribución)
    const ctxPie = document.getElementById('pieChart').getContext('2d');
    new Chart(ctxPie, {
        type: 'doughnut',
        data: {
            labels: ['Positivos', 'Negativos', 'Neutros'],
            datasets: [{
                data: [50, 25, 25], 
                backgroundColor: ['#198754', '#dc3545', '#6c757d'],
                hoverOffset: 4
            }]
        },
        options: { maintainAspectRatio: false, responsive: true }
    });

    // 2. Gráfico de Línea (Simulando Accuracy)
    const ctxLine = document.getElementById('lineChart').getContext('2d');
    new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: ['Epoch 1', 'Epoch 2', 'Epoch 3', 'Epoch 4', 'Epoch 5'],
            datasets: [{
                label: 'Precisión (Accuracy)',
                data: [0.65, 0.72, 0.81, 0.88, 0.94],
                borderColor: '#000',
                backgroundColor: 'rgba(0,0,0,0.1)',
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            scales: {
                y: { beginAtZero: false, min: 0.5, max: 1.0 }
            }
        }
    });
}

// === LÓGICA DE LISTADO Y FILTROS ===
function actualizarContadores() {
    document.getElementById('count-todos').innerText = historialData.length;
    document.getElementById('count-positivo').innerText = historialData.filter(x => x.prevision === 'positivo').length;
    document.getElementById('count-negativo').innerText = historialData.filter(x => x.prevision === 'negativo').length;
    document.getElementById('count-neutro').innerText = historialData.filter(x => x.prevision === 'neutro').length;
}

function filtrarHistorial(filtro) {
    // Gestión visual de botones activos
    document.querySelectorAll('.nav-link').forEach(btn => btn.classList.remove('active'));
    if(filtro === 'todos') document.getElementById('tab-todos').classList.add('active');
    if(filtro === 'positivo') document.getElementById('tab-positivos').classList.add('active');
    if(filtro === 'negativo') document.getElementById('tab-negativos').classList.add('active');
    if(filtro === 'neutro') document.getElementById('tab-neutros').classList.add('active');

    const lista = document.getElementById('listaHistorial');
    lista.innerHTML = '';

    const datosFiltrados = historialData.filter(item => filtro === 'todos' || item.prevision === filtro);

    if (datosFiltrados.length === 0) {
        lista.innerHTML = '<div class="text-center text-muted py-4">No hay datos.</div>';
        return;
    }

    datosFiltrados.forEach(item => {
        let icono = "bi-circle-fill";
        let colorText = "text-muted";
        
        if(item.prevision === 'positivo') { icono = "bi-hand-thumbs-up-fill"; colorText = "text-success"; }
        else if(item.prevision === 'negativo') { icono = "bi-exclamation-triangle-fill"; colorText = "text-danger"; }
        
        const div = document.createElement('div');
        div.className = `card p-3 mb-2 history-item ${item.prevision}`;
        div.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h6 class="fw-bold mb-1 ${colorText}">
                        <i class="bi ${icono} me-1"></i> ${item.prevision.toUpperCase()}
                    </h6>
                    <p class="mb-0 text-muted small">"${item.texto}"</p>
                </div>
                <span class="badge bg-white text-dark border shadow-sm">${Math.round(item.probabilidad * 100)}%</span>
            </div>
        `;
        lista.appendChild(div);
    });
}