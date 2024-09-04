import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importando o HttpClient
import { UtilService } from 'src/app/services/util.service';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.page.html',
  styleUrls: ['./book-form.page.scss'],
})
export class BookFormPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;

  bookName: string = '';
  publicationDate: string = '';
  synopsis: string = '';
  author: string = '';
  isForTrade: boolean = false;
  condition: string = '';
  imageUrls: File[] = []; // Aqui armazenamos os arquivos de imagem
  previewImages: string[] = []; // Aqui armazenamos as URLs das imagens para pré-visualização
  comments: string = '';
  desiredTradeBooks: string = '';

  loaded: boolean = false;

  constructor(
    private http: HttpClient, // Injetando o HttpClient
    public util: UtilService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((data: any) => {
      if (data.name) {
        this.bookName = data.name;
        const info = this.util.bookesList.filter(x => x.title == this.bookName);
        if (info && info.length > 0) {
          this.bookName = info[0].title;
          this.author = info[0].author;
          this.publicationDate = info[0].year;
          this.condition = info[0].condition;
        }
        this.loaded = true;
      }
    });
  }

  ngOnInit() {}

  // Método para capturar as imagens carregadas e gerar pré-visualização
  onFileChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.imageUrls = Array.from(event.target.files);

      // Limpar as pré-visualizações anteriores
      this.previewImages = [];

      // Gerar pré-visualizações das imagens
      this.imageUrls.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.previewImages.push(e.target.result); // Adiciona a URL da imagem
        };
        reader.readAsDataURL(file); // Lê o arquivo de imagem e gera a URL
      });
    }
  }

  onSubmit() {
    const formData = new FormData(); // Usando FormData para o upload de arquivos

    formData.append('name', this.bookName);
    formData.append('publicationDate', this.publicationDate);
    formData.append('synopsis', this.synopsis);
    formData.append('author', this.author);
    formData.append('isForTrade', this.isForTrade.toString());
    formData.append('condition', this.condition);
    formData.append('comments', this.comments);
    formData.append('desiredTradeBooks', this.desiredTradeBooks);

    // Adicionando as imagens ao FormData
    this.imageUrls.forEach((file, index) => {
      formData.append('images', file, file.name);
    });

    // Realizando a requisição POST com o FormData
    this.http.post('http://localhost:8080/api/books', formData)
      .subscribe(
        response => {
          console.log('Book posted successfully', response);
          // Aqui você pode adicionar um redirecionamento ou uma mensagem de sucesso
        },
        error => {
          console.error('Error posting book', error);
          // Aqui você pode adicionar uma mensagem de erro
        }
      );
  }

  onBack() {
    this.util.onBack();
  }
}
