import { Component, ChangeDetectorRef, ChangeDetectionStrategy, Inject } from '@angular/core';
import { LyDialog, LyDialogRef, LY_DIALOG_DATA } from '@alyle/ui/dialog';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { LyTheme2 } from '@alyle/ui';

export interface Map {
  name: string;
  power: number;
  selected: boolean;
  minPower: number;
  maxPower: number;
}

@Component({
  selector: 'app-random-map',
  templateUrl: './random-map.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RandomMapComponent {
  maps: Map[] = [
    { name: 'Customs', power: 10, selected : Math.floor(Math.random() * 11) > 5, minPower: 0, maxPower: 0 },
    { name: 'Interchange', power: 5, selected : Math.floor(Math.random() * 11) > 5, minPower: 0, maxPower: 0 },
    { name: 'Shoreline', power: 7, selected : Math.floor(Math.random() * 11) > 5, minPower: 0, maxPower: 0 },
    { name: 'Factory', power: 5, selected : Math.floor(Math.random() * 11) > 5, minPower: 0, maxPower: 0 },
    { name: 'Labs', power: 1, selected : Math.floor(Math.random() * 11) > 5, minPower: 0, maxPower: 0 },
    { name: 'Reserve', power: 7, selected : Math.floor(Math.random() * 11) > 5, minPower: 0, maxPower: 0 },
    { name: 'Woods', power: 7, selected : Math.floor(Math.random() * 11) > 5, minPower: 0, maxPower: 0 }
  ];
  
  form: FormGroup = new FormGroup({
    maps: new FormArray(
      this.maps
      .map((val) => new FormControl({
        value: val.selected,
        disabled: false
      }))
    )
  });

  mapsAbstractControlArray: AbstractControl[] = (this.form.get('maps') as FormArray).controls;

  constructor(
    private theme: LyTheme2,
    private dialog: LyDialog
  ) { }


  selectedMaps() {
    const maps = this.maps;
    if (maps.length === 0) {
      return [];
    }
    return this.form.value.maps
        .map((bool, index) => bool ? maps[index] : null)
        .filter(bool => bool !== null);
  }

  pickAMap() {
    var map = "Something went wrong :kappa:";
    // Generate a random map take consideration the power
    var mapsToPickIn = this.selectedMaps();
    console.log(mapsToPickIn);

    var totalPower = 0;
    mapsToPickIn.forEach( map => {
      map.minPower = totalPower;
      totalPower += map.power;
      map.maxPower = totalPower - 1;
    });

    var randomNumber = Math.floor(Math.random() * totalPower)
    console.log(randomNumber);
    var pickedMap = mapsToPickIn.find(x => x.minPower <= randomNumber && x.maxPower >= randomNumber);
    console.log(pickedMap);
    this.openResult(pickedMap.name);
  }

  openResult(pickedMap: string){
    const dialogRef = this.dialog.open<DialogMapResult>(DialogMapResult, {
      width: 320,
      data: {
        name: pickedMap
      }
    });
  
    // Receive the result ...
    dialogRef.afterClosed.subscribe((result) => {
        if (result) {
          this.pickAMap();
        }
      });
  }
}

@Component({
  templateUrl: '../dialog/map-result.dialog.html',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogMapResult {
  constructor(
    public dialogRef: LyDialogRef,
    @Inject(LY_DIALOG_DATA) public data: Map
  ) { }
}
