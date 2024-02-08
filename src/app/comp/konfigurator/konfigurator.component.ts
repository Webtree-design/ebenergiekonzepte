import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { KontaktService } from 'src/app/services/kontakt.service';
import { env } from 'src/env';
@Component({
  selector: 'app-konfigurator',
  templateUrl: './konfigurator.component.html',
  styleUrls: ['./konfigurator.component.scss'],
})
export class KonfiguratorComponent {
  showSpinner = true;

  public progress: number;
  public steps: number = 9;
  public form: FormData = {
    Hausart: '',
    Nutzen: '',
    Suedlich: '',
    Flaeche: '',
    kaufenMieten: '',
    stromspeicher: '',
    dachalter: '',
    plz: '',
    tel: '',
  };
  constructor(
    private _formBuilder: FormBuilder,
    public snackBar: MatSnackBar,
    public kontactService: KontaktService
  ) {
    this.progress = 0;
  }
  openSnackBar(message: string) {
    let config = new MatSnackBarConfig();
    config.panelClass = ['custom-snackbar'];
    config.horizontalPosition = 'start';
    config.verticalPosition = 'bottom';
    config.duration = 3000;
    this.snackBar.open(message, '', config);
  }

  firstFormGroup = this._formBuilder.group({
    selectedOption: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    selectedOption: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    selectedOption: ['', Validators.required],
  });
  fourFormGroup = this._formBuilder.group({
    selectedOption: ['', Validators.required],
  });
  fiveFormGroup = this._formBuilder.group({
    selectedOption: ['', Validators.required],
  });
  sixFormGroup = this._formBuilder.group({
    selectedOption: ['', Validators.required],
  });
  sevenFormGroup = this._formBuilder.group({
    selectedOption: ['', Validators.required],
  });
  eightFormGroup = this._formBuilder.group({
    selectedOption: ['', [Validators.required, Validators.minLength(4)]],
  });
  nineFormGroup = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    tel: ['', [Validators.required, Validators.minLength(5)]],
    box: [false, Validators.required],
  });

  Next(stepper: any) {
    const index = stepper._selectedIndex;
    console.log(index);

    this.progress = (index / this.steps) * 100;
    if (stepper._selectedIndex == 8) {
      setTimeout(() => {
        this.showSpinner = false;
      }, 3000);
    }
  }
  Back(stepper: any) {
    const index = stepper._selectedIndex;
    this.progress = (index / this.steps) * 100;
  }

  Senden() {
    if (this.nineFormGroup.valid) {
      const oneOption = this.firstFormGroup.get('selectedOption')!.value;
      const twoOption = this.secondFormGroup.get('selectedOption')!.value;
      const threeOption = this.thirdFormGroup.get('selectedOption')!.value;
      const fourOption = this.fourFormGroup.get('selectedOption')!.value;
      const fiveOption = this.fiveFormGroup.get('selectedOption')!.value;
      const sixOption = this.sixFormGroup.get('selectedOption')!.value;
      const sevenOption = this.sevenFormGroup.get('selectedOption')!.value;
      const eightOption = this.eightFormGroup.get('selectedOption')!.value;

      const nineOptionName = this.nineFormGroup.get('name')!.value;
      const nineOptionTel = this.nineFormGroup.get('tel')!.value;
      const nineOptionEmail = this.nineFormGroup.get('email')!.value;
      const nineOptionBox = this.nineFormGroup.get('box')!.value;

      if (oneOption) this.form.Hausart = oneOption;
      if (twoOption) this.form.Nutzen = twoOption;
      if (threeOption) this.form.Suedlich = threeOption;
      if (fourOption) this.form.Flaeche = fourOption;
      if (fiveOption) this.form.kaufenMieten = fiveOption;
      if (sixOption) this.form.stromspeicher = sixOption;
      if (sevenOption) this.form.dachalter = sevenOption;
      if (eightOption) this.form.plz = eightOption;
      if (nineOptionTel) this.form.tel = nineOptionTel;

      const form: any = {
        eName: nineOptionName,
        eEmail: nineOptionEmail,
        eMessage: JSON.stringify(this.form),
        eBetreff: 'Konfigurator Anfrage',
        eEmailTo: env.eEmailTo,
        eCompany: env.eCompany,
        SMTPMail: env.SMTPMail,
      };

      this.kontactService.createEmail(form).subscribe((res) => {
        this.openSnackBar('Email gesendet');
      });
    }
  }

  createEmail() {}
}

interface FormData {
  Hausart: string;
  Nutzen: string;
  Suedlich: string;
  Flaeche: string;
  kaufenMieten: string;
  stromspeicher: string;
  dachalter: string;
  plz: string;
  tel: string;
}
