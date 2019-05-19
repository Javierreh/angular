import { Injectable } from '@angular/core';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

	arrPost: Post[];


	constructor() {
		this.arrPost = [
			{
        		titulo: "Titulo Post 1",
        		texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis sit molestiae animi.',
        		autor: 'Autor 1',
        		imagen: 'https://static3lonelyplanetes.cdnstatics.com/sites/default/files/styles/max_1300x1300/public/blog/PolinesiaFrancesa_playaRangiroa_GettyRF_524891702_Vpommeyrol_Getty%20Images_0.jpg?itok=RxeSU30C',
        		fecha: "10/08/1990",
        		categoria: "playa"
    		},
    		{
        		titulo: "Titulo Post 2",
        		texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis sit molestiae animi.',
        		autor: 'Autor 1',
        		imagen: 'https://static3.elcorreo.com/www/multimedia/201809/18/media/cortadas/Pais-Vasco-en-bicicleta-10-kolotrip-kBpF-U60953610167sSH-624x385@El%20Correo.jpg',
        		fecha: "15/11/1996",
        		categoria: "montaña"
    		},
    		{
        		titulo: "Titulo Post 3",
        		texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis sit molestiae animi.',
        		autor: 'Autor 1',
        		imagen: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2018/01/calacuta-huatulco-oaxaca.jpg',
        		fecha: "09/09/1999",
        		categoria: "playa"
    		},
    		{
        		titulo: "Titulo Post 4",
        		texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis sit molestiae animi.',
        		autor: 'Autor 2',
        		imagen: 'https://codigooculto.com/wp-content/uploads/2017/11/algo-muy-raro-se-esconde-en-montana-untersberg-portada-800x450.jpg',
        		fecha: "09/09/1997",
        		categoria: "montaña"
    		},
    		{
        		titulo: "Titulo Post 5",
        		texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis sit molestiae animi.',
        		autor: 'Autor 2',
        		imagen: 'https://www.infobae.com/new-resizer/-8TMdY25Zce6Xc4lxP9z1QTFXqg=/750x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/08/31160759/Shenzhen-Mega-Ciudad-8.jpg',
        		fecha: "01/03/2002",
        		categoria: "ciudad"
    		},
    		{
        		titulo: "Titulo Post 6",
        		texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis sit molestiae animi.',
        		autor: 'Autor 3',
        		imagen: 'https://www.infobae.com/new-resizer/V-wHQmnHkn_-vwfUZMhQ_FzFjfQ=/750x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/08/31160622/Shenzhen-Mega-Ciudad-4.jpg',
        		fecha: "30/05/2001",
        		categoria: "ciudad"
    		}
		]
	}

	agregarPost(pPost) {
		this.arrPost.push(pPost);
	}

	getAllPosts() {
		return this.arrPost;
	}

	getPostsByCategoria(pCat) {
		return this.arrPost.filter(post => post.categoria == pCat);
	}

}
