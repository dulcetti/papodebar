'use client'

import { ComponentProps } from 'react';
import styles from '@/styles/Post.module.scss';

interface PostDateProps extends ComponentProps<'div'> {
  date: string;
}

type PostDates = {
  day: string;
  month: string;
  year: string;
};

function dateConverter(date: string): PostDates {
  const postDate = new Date(date);
  const day: number = new Date(postDate).getDay();
  const month: number = new Date(postDate).getMonth();
  const year = new Date(postDate).getFullYear();

  return {
    day: numberLessThanTen(day),
    month: numberLessThanTen(month),
    year: `${year}`
  };
}

function numberLessThanTen(num: number): string {
  return (num < 10) ? '0' + num : `${num}`;
}

export function PostDate({
  className,
  date,
  ...props
}: PostDateProps) {
  const postDate = dateConverter(date);
  const isoDate = new Date(date).toISOString();

  return (
    <div
      data-slot="post-date"
      className={className}
      itemProp="datePublished"
      content={isoDate}
      {...props}
    >
      <span className={styles.day}>{postDate.day}</span>/
      <span className={styles.month}>{postDate.month}</span>
      <span className={styles.year}>{postDate.year}</span>
    </div>
  );
}
