import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { SellerService } from '../../../services/seller.service';
import { ISeller } from '../../../models/seller';
import { MatIconModule } from '@angular/material/icon';
import { SearchbarComponent } from "../../../shared/components/searchbar/searchbar.component";
@Component({
  selector: 'app-all-sellers',
  imports: [MatTableModule, MatPaginatorModule, MatIconModule, SearchbarComponent],
  templateUrl: './all-sellers.component.html',
  styleUrl: './all-sellers.component.scss',
})
export class AllSellersComponent {
  displayedColumns: string[] = ['username', 'email', 'contact_number','status','action',];
  allSellers :ISeller[]=[]
  // filteredSellers = new MatTableDataSource<ISeller>(this.allSellers);

  constructor(private http: HttpClient, private sellerService: SellerService) 
  {this.fetchSeller()}
  dataSource = new MatTableDataSource<ISeller>(this.allSellers);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  fetchSeller() {
    this.sellerService.getSeller().subscribe({
      next: (responseData) => {
       
        this.allSellers = responseData.data;
        // this.dataSource = this.allSellers
        this.dataSource.data = this.allSellers;
        console.log("allSellers",responseData.data);

      },
      error: (err) => {
        console.error(err);
      }
  
    });
  }
  
  updateSellerStatus(sellerId:string,status:string){
    console.log("updated",sellerId,status)

  }

  filterSellers(searchTerm: string) {
    const lowerCaseTerm = searchTerm.toLowerCase();
    // this.filteredSellers.data = this.allSellers.filter(
    //   (seller) =>
    //     seller.username.toLowerCase().includes(lowerCaseTerm) ||
    //     seller.email.toLowerCase().includes(lowerCaseTerm)
    // );
  }
}
