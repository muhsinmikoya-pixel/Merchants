// MERCHANT public client configuration. The publishable key is designed for browser use.
// Row Level Security protects the database. Never put a service_role or secret key here.
export const SUPABASE_URL = "https://jxtblxcxqxuontvtlzkq.supabase.co";
export const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_Lb4CgyTxBCiputzK-l6FTg_NaX7dtZU";
export const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
});
export const money = value => new Intl.NumberFormat("en-KE",{style:"currency",currency:"KES",maximumFractionDigits:2}).format(Number(value||0));
export const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
export const slugify = value => String(value||"").toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,40);
