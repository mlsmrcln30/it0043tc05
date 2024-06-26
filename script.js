const container = document.querySelector('.container');
const gapInput = document.getElementById('gap');
const flexDirectionSelect = document.getElementById('flex-direction');
const justifyContentSelect = document.getElementById('justify-content');
const alignItemsSelect = document.getElementById('align-items');
const flexGrowResetButton = document.getElementById('reset-flex-grow');
const growAllButton = document.getElementById('grow-all');
const box1GrowInput = document.getElementById('box-1-grow');
const box2GrowInput = document.getElementById('box-2-grow');
const box3GrowInput = document.getElementById('box-3-grow');

gapInput.addEventListener('input', () => {
  container.style.gap = `${gapInput.value}px`;
});

flexDirectionSelect.addEventListener('change', () => {
  container.style.flexDirection = flexDirectionSelect.value;
});

justifyContentSelect.addEventListener('change', () => {
  container.style.justifyContent = justifyContentSelect.value;
});

alignItemsSelect.addEventListener('change', () => {
  container.style.alignItems = alignItemsSelect.value;
});

flexGrowResetButton.addEventListener('click', () => {
  box1GrowInput.value = 0;
  box2GrowInput.value = 0;
  box3GrowInput.value = 0;
  updateFlexGrow();
});

growAllButton.addEventListener('click', () => {
  box1GrowInput.value = 1;
  box2GrowInput.value = 1;
  box3GrowInput.value = 1;
  updateFlexGrow();
});

box1GrowInput.addEventListener('input', updateFlexGrow);
box2GrowInput.addEventListener('input', updateFlexGrow);
box3GrowInput.addEventListener('input', updateFlexGrow);

function updateFlexGrow() {
  const box1 = document.getElementById('box1');
  const box2 = document.getElementById('box2');
  const box3 = document.getElementById('box3');
  box1.style.flexGrow = box1GrowInput.value;
  box2.style.flexGrow = box2GrowInput.value;
  box3.style.flexGrow = box3GrowInput.value;
}