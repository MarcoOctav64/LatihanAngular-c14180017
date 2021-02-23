import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  Baris = null;
  Kolom = null;
  x = 0;
  arrays = [
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"]
  ];
  //tombol run
  proses() {
    if (this.Baris != null && this.Kolom != null) {
      if (
        this.Baris >= 0 &&
        this.Baris <= 4 &&
        this.Kolom >= 0 &&
        this.Kolom <= 4
      ) {
        if (this.x == 0 && this.arrays[this.Baris][this.Kolom] == "*") {
          this.arrays[this.Baris][this.Kolom] = "0";
          this.x = 1;
        } else if (this.x === 1 && this.arrays[this.Baris][this.Kolom] == "*") {
          this.arrays[this.Baris][this.Kolom] = "1";
          this.x = 1;
        }
      }
    }
  }
  //tombol reset
  reset() {
    this.arrays = [
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"]
    ];
    this.x = 0;
  }
}
