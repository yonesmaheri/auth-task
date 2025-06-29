'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/dashboard.module.scss';
import Button from '@/components/button';

export default function DashboardPage() {
  const router = useRouter();
  const [isLoggingOut,setIsLoggingOut] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      router.replace('/auth');
    }
  }, [router]);
  const logout = ()=>{
    localStorage.removeItem('user')
    setIsLoggingOut(true)
    setTimeout(()=>{
      router.push('/auth')
    },2000)
  }

  return (
    <div className={styles.container}>
      <h1>خوش آمدید کاربر عزیز</h1>
      <Button label='خروج' onClick={logout}></Button>
      {isLoggingOut && <span>کاربر با موفقیت خارج شد</span>}
    </div>
  );
}
