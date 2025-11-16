import BookViewer from '@/components/BookViewer';
import { book1Data } from '@/lib/bookData';

export default function Book1() {
  return <BookViewer pages={book1Data} />;
}

