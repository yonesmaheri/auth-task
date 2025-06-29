"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "@/styles/auth.module.scss";
import { validatePhone } from "@/utils/validaion";
import Input from "@/components/input";
import Button from "@/components/button";

export default function AuthPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    const validationError = validatePhone(phone);
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
      const data = await res.json();
      const user = data.results[0];

      localStorage.setItem("user", JSON.stringify(user));
      router.push('/dashboard');
    } catch (err) {
      console.error("Login failed", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div dir="rtl" className={styles.container}>
      <h1>ورود</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
        className={styles.form}
      >
        <Input value={phone} onChange={setPhone} error={error ?? undefined} />
        <Button label="ورود" onClick={handleLogin} loading={loading} />
      </form>
    </div>
  );
}
