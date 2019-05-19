import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	formulario: FormGroup;
	uploadPercent: Observable<number>;
	imageUrl: string;

	constructor(private storage: AngularFireStorage) {

		this.formulario = new FormGroup({
			nombre: new FormControl('', [
				Validators.required,
				Validators.minLength(2),
				Validators.maxLength(15)
			]),
			apellidos: new FormControl('', [
				Validators.required
			]),
			edad: new FormControl('', [
				Validators.required,
			])
		}, [
			this.imageValidator.bind(this)
		]);
	}

	onSubmit() {
		this.formulario.value.imagen = this.imageUrl;
		console.log(this.formulario.value);
		this.formulario.reset();
	}

	onChangeImage($event) {
		const image = $event.target.files[0];
		const filePath = 'imagenes/nuevaImagen.jpg';
		const fileRef = this.storage.ref(filePath);
		const tarea = this.storage.upload(filePath, image);

		this.uploadPercent = tarea.percentageChanges();

		//Dos opciones para obtener la url
		//Primera
		// tarea.snapshotChanges().pipe(
		// 	finalize(() => {
		// 		fileRef.getDownloadURL().subscribe(url => {
		// 			console.log(url);
		// 		});
		// 	})
		// ).subscribe();

		//Segunda
		tarea.snapshotChanges().pipe(
			finalize(async () => {
				this.imageUrl = await fileRef.getDownloadURL().toPromise();
			})
		).subscribe();

	}

	imageValidator(formGroup: FormGroup) {
		if (this.imageUrl) {
			return null;
		}
		else {
			return { image: 'La carga de la imagen es obligatoria' }
		}
	}

}
