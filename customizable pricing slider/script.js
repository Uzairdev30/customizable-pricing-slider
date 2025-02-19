const priceSlider = document.getElementById('price-slider');
const priceLabelStart = document.getElementById('price-label-start');
const priceLabelEnd = document.getElementById('price-label-end');
const featureText = document.getElementById('feature-text');
const planTier = document.getElementById('plan-tier');

// Update the pricing information dynamically as the slider is adjusted
priceSlider.addEventListener('input', function () {
    const value = priceSlider.value;
    priceLabelStart.textContent = `$${value}`;

    // Adjust plan tier and feature description based on price
    if (value <= 30) {
        planTier.textContent = "Basic Plan";
        featureText.textContent = "Access to basic features such as limited customization.";
    } else if (value <= 60) {
        planTier.textContent = "Standard Plan";
        featureText.textContent = "Additional support, more customization options, and priority access.";
    } else {
        planTier.textContent = "Premium Plan";
        featureText.textContent = "All-inclusive features, priority support, and exclusive content.";
    }

    // Change the background gradient dynamically based on the selected value
    let gradient = `linear-gradient(to right, #FF4C60 ${value}%, #FFC107 ${value}%)`;
    priceSlider.style.background = gradient;
});
