// Topic filter for ByMeNotAI homepage
document.addEventListener('DOMContentLoaded', function () {
  const pills = document.querySelectorAll('.pill');
  const cards = document.querySelectorAll('.post-card');

  pills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      const topic = pill.dataset.topic;

      // Update active pill
      pills.forEach(function (p) { p.classList.remove('active'); });
      pill.classList.add('active');

      // Show / hide cards
      cards.forEach(function (card) {
        if (topic === 'all' || card.dataset.topic === topic) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
});
