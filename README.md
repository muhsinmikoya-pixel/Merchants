# MERCHANT

A mobile-first storefront marketplace built with plain HTML, CSS and JavaScript, Supabase, and Render.

## Live site

https://merchant-8ggd.onrender.com

## Pages

- `index.html` — landing page and seller/customer choice
- `auth.html` — email/password registration, sign-in, password recovery and Google OAuth button
- `dashboard.html` — seller store, products, stock and order management
- `stores.html` — public store discovery and search
- `shop.html` — public storefront, product search, cart and checkout
- `account.html` — signed-in customer order history
- `track-order.html` — guest order tracking using order ID and checkout phone
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

## Seller tools

The seller studio includes product CRUD, image uploads, stock and visibility controls, low-stock alerts, monthly order-value charts, order detail views, CSV export, profile editing, store logo upload, public/private publishing and three storefront themes (Soft minimal, Dark luxury, Bright & playful).

## Google sign-in setup

The Google button is implemented, but Google OAuth must be enabled before it can be used. In Google Cloud, create a Web OAuth client with this site's origin (`https://merchant-8ggd.onrender.com`) and the Supabase callback URL (`https://jxtblxcxqxuontvtlzkq.supabase.co/auth/v1/callback`). Add the Google Client ID and Client Secret in Supabase → Authentication → Sign In / Providers → Google, then enable the provider. Never put the Google Client Secret in the website code.

## Current checkout

Checkout records orders and reserves stock. Payment and delivery are arranged directly with the seller (including WhatsApp where a seller added a number). No card or M-Pesa payment is collected by MERCHANT yet.

## Features that still need external setup

- Automated order email notifications need an email delivery provider (for example Resend) and its private API key configured as a server-side secret. No email provider credentials are currently connected.
- A clean custom domain requires purchasing or owning a domain and adding its DNS records in Render. The current Render subdomain remains active until then.

## Before a public launch

- Configure and test the Supabase Auth redirect URLs above.
- Create a seller account and test store creation, product upload and product editing.
- Create a separate customer account and test browsing and checkout.
- Verify seller A cannot read or edit seller B's private data.
- Configure a real payment provider and server-side webhook before advertising online payments.
- Add rate limiting / abuse monitoring for public guest checkout before large-scale traffic.
