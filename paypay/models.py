from django.db import models
# import stripe
from django.utils import timezone
class Space_Race(models.Model):
    subscription    = models.CharField(max_length=234)
    quantity        = models.CharField(max_length=4)
    charge_id       = models.CharField(max_length=234)

# stripe.api_key = 'sk_test_HP05OJENWcUnfccM9cXT1yLS' # settings.STRIPE_SECRET_KEY

def checkout(request):

    new_subscription = Space_Race(
        subscription = "30 days",
        date_purchased = models.DateField(default=timezone.now)

    )

    if request.method == "POST":
        token    = request.POST.get("stripeToken")

    try:
        charge  = stripe.Charge.create(
            amount      = 999,
            currency    = "usd",
            source      = token,
            description = "The product charged to the user"
        )

        new_car.charge_id   = charge.id

    except stripe.error.CardError as ce:
        return False, ce

    else:
        new_subscription.save()
        return redirect("thank_you_page")
        # The payment was successfully processed, the user's card was charged.
        # You can now redirect the user to another page or whatever you want

