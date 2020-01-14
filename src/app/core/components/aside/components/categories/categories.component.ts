import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryDto } from '../../../../../api/dtos/category.dto';
import { CategoriesService } from '../../../../../api/services/categories.service';
import { Urls } from '../../../../../utilities/urls';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent implements OnInit {
  categories$: Observable<CategoryDto[]>;

  constructor(private readonly categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categories$ = this.categoriesService.getCategories();
  }

  getUrl(link: string): string {
    return new Urls().getPath(link);
  }
}
