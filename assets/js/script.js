document.addEventListener('DOMContentLoaded', function() {
  // Fade-up animation on scroll
  const faders = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  faders.forEach(el => observer.observe(el));

  // FAQ accordion toggle
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      item.classList.toggle('active');
    });
  });

  // WhatsApp form submission
  const form = document.getElementById('requestForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const type = form.eventType.value;
      const attendees = form.attendees.value;
      const selectedServices = Array.from(form.querySelectorAll('input[name="services"]:checked'))
        .map(el => el.value)
        .join(', ');
      const location = form.location.value;
      const date = form.eventDate.value;
      const notes = form.notes.value;
      let message = `السلام عليكم، أبغى طلب تجهيز فعالية عبر EventOps:%0A`;
      message += `نوع الفعالية: ${type}%0A`;
      message += `عدد الحضور: ${attendees}%0A`;
      message += `الخدمات المطلوبة: ${selectedServices}%0A`;
      message += `الموقع داخل الرياض: ${location}%0A`;
      message += `التاريخ المبدئي: ${date}%0A`;
      message += `ملاحظات: ${notes}`;
      const phone = "966XXXXXXXXX"; // replace with actual number
      const waLink = `https://wa.me/${phone}?text=${message}`;
      window.open(waLink, '_blank');
    });
  }
});
