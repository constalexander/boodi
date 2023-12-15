import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../atoms/button';

/* eslint-disable-next-line */
export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  pageNumber: number;
}

export function Pagination(props: PaginationProps) {
  const { pageNumber, ...rest } = props;

  const goPageLeft = () => {};
  const goPageRight = () => {};

  return (
    <div
      {...rest}
      className={`w-[106px] bg-blueIce-800 ${rest.className || ''}`}
    >
      <Button variant="ghost" onClick={() => goPageLeft()}>
        <ChevronLeft className="w-[1rem]" />
      </Button>
      <div className="inline">{pageNumber}</div>
      <Button variant="ghost" onClick={() => goPageRight()}>
        <ChevronRight className="w-[1rem]" />
      </Button>
    </div>
  );
}

export default Pagination;
