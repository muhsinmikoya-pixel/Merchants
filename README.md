# MERCHANT

A mobile-first storefront marketplace built with plain HTML, CSS and JavaScript, Supabase, and Render.

## Live site

https://merchant-8ggd.onrender.com

## Pages

- `index.html` — landing page and seller/customer choice
- `auth.html` — email/password registration and sign-in
- `dashboard.html` — seller store, products, stock and order management
- `stores.html` — public store discovery and search
- `shop.html` — public storefront, product search, cart and checkout
- `account.html` — signed-in customer order history
- `reset-password.html` — password reset destination
- `js/supabase.js` — public Supabase client configuration

## Backend

Supabase project: `MERCHANTS`

The database contains profiles, stores, products, orders and order_items. Row Level Security is enabled on these tables. Public visitors can read published stores and active products. Sellers can manage only their own store and products. Customers can read only their own signed-in orders. Checkout uses a database function that validates product availability, calculates prices on the server, creates the order and decrements stock in one transaction.

Product photos are stored in the public `merchant-products` Storage bucket. Upload, replace and delete policies check the store ID in the first folder segment.

Only the Supabase publishable key is included in browser code. Never add a service-role key or secret key to this repository.

## One-time Auth configuration

In the Supabase Dashboard, open **Authentication → URL Configuration**:

- Set **Site URL** to `https://merchant-8ggd.onrender.com`
- Add `https://merchant-8ggd.onrender.com/**` to **Redirect URLs**

Email confirmation should remain enabled for account verification. Password recovery redirects to `reset-password.html`.

## Current checkout

Checkout records orders and reserves stock. Payment and delivery are arranged directly with the seller (including WhatsApp where a seller added a number). No card or M-Pesa payment is collected by MERCHANT yet.

## Before a public launch

- Configure and test the Supabase Auth redirect URLs above.
- Create a seller account and test store creation, product upload and product editing.
- Create a separate customer account and test browsing and checkout.
- Verify seller A cannot read or edit seller B's private data.
- Configure a real payment provider and server-side webhook before advertising online payments.
- Add rate limiting / abuse monitoring for public guest checkout before large-scale traffic.
