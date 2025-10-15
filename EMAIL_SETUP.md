# Email Contact Form Setup Guide

Form contact sudah disetup dengan **FormSubmit** sebagai default. Berikut adalah panduan lengkap dan opsi alternatif lainnya.

## ✅ OPSI 1: FormSubmit (CURRENT - Paling Mudah)

**Status**: ✅ Sudah Aktif

**Kelebihan**:
- ✨ No setup required
- ✨ Gratis selamanya
- ✨ Langsung kirim ke email
- ✨ No backend needed

**Cara Kerja**:
Form saat ini sudah menggunakan FormSubmit dan akan mengirim email langsung ke `suryarahmatfatahillah@gmail.com`.

**Langkah Aktivasi**:
1. Pertama kali form disubmit, FormSubmit akan kirim email konfirmasi ke `suryarahmatfatahillah@gmail.com`
2. Buka email dan klik link konfirmasi
3. Setelah itu, semua form submission akan langsung masuk ke email kamu!

**Customization** (Opsional):
Untuk customize lebih lanjut, kamu bisa tambahkan field hidden di form:

```tsx
<input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />
<input type="hidden" name="_subject" value="New Contact Form Submission!" />
<input type="hidden" name="_captcha" value="false" />
```

---

## 🚀 OPSI 2: EmailJS (Recommended untuk Fitur Lebih Lengkap)

**Kelebihan**:
- 📧 200 email gratis per bulan
- 📊 Dashboard analytics
- 🎨 Email templates
- 🔒 reCAPTCHA support

**Setup Steps**:

### 1. Daftar di EmailJS
1. Kunjungi https://www.emailjs.com/
2. Sign up gratis
3. Verify email

### 2. Setup Email Service
1. Di dashboard, pilih "Email Services"
2. Klik "Add New Service"
3. Pilih Gmail
4. Connect dengan email `suryarahmatfatahillah@gmail.com`

### 3. Buat Email Template
1. Pilih "Email Templates"
2. Klik "Create New Template"
3. Gunakan template ini:

```
Subject: New Contact from {{name}}

From: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}
```

Variables: `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`

### 4. Install EmailJS
```bash
npm install @emailjs/browser
```

### 5. Update Contact.tsx

Ganti fungsi `handleSubmit` dengan:

```tsx
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setFormStatus({ type: "loading", message: "Sending..." });

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',      // Dari EmailJS dashboard
      'YOUR_TEMPLATE_ID',     // Dari EmailJS dashboard
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'YOUR_PUBLIC_KEY'       // Dari EmailJS dashboard > Account
    );

    setFormStatus({
      type: "success",
      message: "Message sent successfully! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  } catch (error) {
    setFormStatus({
      type: "error",
      message: "Failed to send message. Please try again.",
    });
  }
};
```

---

## 💎 OPSI 3: Resend API (Paling Professional)

**Kelebihan**:
- 🎯 100 email gratis per hari
- 💪 Modern API
- 📧 Custom domain support
- 🔥 Rate limiting built-in

**Setup Steps**:

### 1. Daftar di Resend
1. Kunjungi https://resend.com/
2. Sign up dengan GitHub
3. Get API Key dari dashboard

### 2. Install Resend
```bash
npm install resend
```

### 3. Setup Environment Variables
Buat file `.env.local`:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
```

### 4. Buat API Route

Buat file: `app/api/send-email/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Gunakan custom domain nanti
      to: 'suryarahmatfatahillah@gmail.com',
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully', data });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
```

### 5. Update Contact.tsx

Ganti fungsi `handleSubmit` dengan:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setFormStatus({ type: "loading", message: "Sending..." });

  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    setFormStatus({
      type: "success",
      message: "Message sent successfully! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  } catch (error) {
    setFormStatus({
      type: "error",
      message: "Failed to send message. Please try again.",
    });
  }
};
```

---

## 📊 Perbandingan

| Feature | FormSubmit | EmailJS | Resend |
|---------|-----------|---------|--------|
| Setup Time | ⚡ 1 menit | 🕐 5 menit | 🕐 10 menit |
| Free Tier | ♾️ Unlimited | 200/bulan | 100/hari |
| Custom Templates | ❌ | ✅ | ✅ |
| Analytics | ❌ | ✅ | ✅ |
| Custom Domain | ❌ | ❌ | ✅ |
| Backend Required | ❌ | ❌ | ✅ |
| Professional | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

---

## 🎯 Rekomendasi

- **Untuk quick launch**: Tetap pakai **FormSubmit** (sudah aktif)
- **Untuk analytics & templates**: Upgrade ke **EmailJS**
- **Untuk production/professional**: Pakai **Resend**

---

## 🔧 Troubleshooting

### FormSubmit tidak menerima email?
1. Check spam folder
2. Klik confirmation link di email pertama
3. Pastikan email di code sama dengan yang didaftarkan

### EmailJS error?
1. Pastikan Service ID, Template ID, dan Public Key benar
2. Check quota (200 emails/bulan)
3. Verify email service connected

### Resend error?
1. Check API key di `.env.local`
2. Pastikan API route path benar (`/api/send-email`)
3. Check Resend dashboard untuk error logs

---

Dibuat dengan ❤️ oleh Claude Code
