<form action="{{ route('payment') }}" method="post"> 
    @csrf
    <!-- <input type="hidden" name="amount" value="200"> -->
    <input type="hidden" name="package_id" value="3">
    <button type="submit">Checkout</button>
</form>