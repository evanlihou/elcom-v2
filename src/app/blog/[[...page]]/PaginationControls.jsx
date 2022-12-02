'use client';

import Link from "next/link";

export default function PaginationControls({pagination}) {
  return (<>
    {pagination && pagination.pages > 1 &&
      <span className="pagination">
        {pagination.prev &&
          <div className="prevButton">
            <Link href={`/blog/${pagination.prev}`}>Next</Link>
          </div>
        }
        <span className="progress">
          {pagination.page} of {pagination.pages}
        </span>
        {pagination.next &&
          <div className="nextButton">
            <Link href={`/blog/${pagination.next}`}>Next</Link>
          </div>
        }
      </span>
    }
  </>);
}