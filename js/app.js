function showBlock(id) {

  const blocks = document.querySelectorAll('.block');

  if (!blocks.length) return;

  blocks.forEach(block => {
    block.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');
}

const toggle = document.getElementById('theme-toggle');

if (toggle) {

  toggle.addEventListener('click', () => {

    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {

      toggle.innerHTML = '☀️';

    } else {

      toggle.innerHTML = '🌙';

    }

  });

}