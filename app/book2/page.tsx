import BookViewer from '@/components/BookViewer';
import { book2Data } from '@/lib/bookData';

export default function Book2() {
  return <BookViewer pages={book2Data} />;
}

