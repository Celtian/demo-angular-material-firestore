import { ParamMap } from '@angular/router';
import { OperatorFunction, map } from 'rxjs';
import { PostDto } from '../dto/post.dto';

interface GetParamSort {
  sortBy: keyof Omit<PostDto, 'id'>;
  sortDirection: 'asc' | 'desc';
}

export const getParamSort = (): OperatorFunction<ParamMap, GetParamSort> => {
  return (input$) => {
    return input$.pipe(
      map((params) => {
        return {
          sortBy: (params.get('sortBy') || 'title') as keyof Omit<PostDto, 'id'>,
          sortDirection: (params.get('sortDirection') || 'asc') as 'asc' | 'desc',
        };
      }),
    );
  };
};
