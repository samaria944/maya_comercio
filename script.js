const grid = document.getElementById('malla');
const filas = 5;
const columnas = 5;

for (let i = 0; i < filas * columnas; i++) {
  const celda = document.createElement('div');
  celda.classList.add('cell');
  celda.addEventListener('click', () => {
    celda.classList.toggle('active');
  });
  grid.appendChild(celda);
}
