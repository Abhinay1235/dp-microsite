import { NgModule } from "@angular/core";
import { CreateServiceComponent } from "./create-service.component";
import { MatDividerModule } from "@angular/material/divider";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
    declarations: [CreateServiceComponent],
    imports: [
      CommonModule,
      MatDialogModule,
      MatInputModule,
      MatDividerModule,
      MatSelectModule,
      ReactiveFormsModule,
      MatMenuModule,
      FormsModule,
      MatButtonModule,
    ]
  })
  export class CreateServiceModule {
  }