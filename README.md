# Co-Hand (Crafted Original by Hand)
### <i>Your Online Handmade Shop🛍️</i>
###### by Akhdan Taufiq Syofyan | PBP-D | 2306152475
##### 🔗WEB LINK : http://akhdan-taufiq-cohand.pbp.cs.ui.ac.id/
## Table of Contents
- [Jawaban Tugas 2: Implementasi Model-View-Template (MVT) pada Django](https://github.com/akhdntaufiq/co-hand?tab=readme-ov-file#jawaban-tugas-2) <br>
- [Jawaban Tugas 3: Implementasi Form dan Data Delivery pada Django](https://github.com/akhdntaufiq/co-hand?tab=readme-ov-file#jawaban-tugas-3)
## 🖋Jawaban Tugas 2
### 1️⃣ Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step!
1. Membuat direktori lokal dengan nama "co-hand" untuk proyek git, lalu konfigurasi git pada direktori tersebut.
   ```
   git init
   git config --global user.name "<NAME>"
   git config --global user.email "<EMAIL>"
   ```
2. Kemudian, saya membuat repositori di github dengan nama "co-hand".
3. Setelah direktori lokal dan repositori github dibuat, saya akan menghubungkan keduanya dengan cara melakukan hal berikut di terminal direktori lokal. **(NOTES: default branch saya adalah master)**
   ```
   git branch -M master
   git remote add origin <URL REPO>
   ```
4. Untuk mengecek apakah sudah atau belumnya terhubung, saya membuat file `README.md` di direktori lokal. Lalu, saya menjalankan command berikut di dalam terminal direktori lokal.
   ```
   git add .
   git commit -m "update...."
   git push origin master
   ```
5. Setelah melakukan perintah tersebut, file `README.md` seharusnya sudah berada di dalam repositori github "co-hand".
6. Kemudian, saya lanjut mengenai instalasi django. hal pertama yang dolakukan adalah membuat virtual environment di dalam direktori lokal dan mengaktifkannya dengan cara berikut. **(NOTES: Saya menggunakan Windows)**
   ```
   python -m venv env
   env\Scripts\activate
   ```
7. Pada direkori lokal "co-hand", saya membuat file `requirements.txt` dan menambahkan beberapa dependencies.
8. Lalu, install dependencies tersebut dan dilanjutkan dengan membuat proyek django dengan nama "co_hand".
   ```
   pip install -r requirements.txt
   django-admin startproject co_hand .
   ```
9. Setelah menjalankan langkah diatas, saya melihat terdapat beberapa file serta folder baru. Kemudian, saya mencari `settings.py` dan menambahkan kedua string berikut ke dalam `ALLOWED_HOST`.
    ```
    "localhost", "127.0.0.1"
    ```
10. Kemudian, saya membuat aplikasi baru dengan nama `main`.</p>
    ```
    python manage.py startapp main
    ```
11. Setelah itu saya menambahkan `main` pada `INSTALLED_APPS` di `settings.py` direktori co_hand.
12. Kemudian, saya membuat direktori baru di aplikasi main dengan nama `templates` dan membuat file baru di dalamnya dengan nama `main.html`. Lalu, saya mengisi `main.html` dengan kode berikut.
    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>
    </head>
    <body>
        <h1>Welcome to {{app}}</h1>
        <h5><i>"Karya Tangan, Penuh Makna"</i></h5>
        <p>Made with 💖 by {{name}} | {{class}} | {{npm}}</p>
    </body>
    </html>
    ```
13. Lalu, saya mengisi `models.py` pada aplikasi main dengan kode berikut.
    ```
    from django.db import models

    class Product(models.Model):
        name = models.CharField(max_length=255)
        price = models.IntegerField()
        description = models.TextField()
        date_added = models.DateTimeField(auto_now_add=True)
    
        def __str__(self):
            return self.name
    ```
14. Karena pada project ini saya menggunakan models, maka saya harus mengaplikasikan models ke dalam basis data dengan cara migrasi model.
    ```
    python manage.py makemigrations
    python manage.py migrate
    ```
15. Kemudian, saya menghubungkan view dengan template yang sebelumnya sudah dibuat dengan cara menambahkan line berikut pada `views.py` di dalam aplikasi main.
    ```
    from django.shortcuts import render

    def show_main(request):
    context = {
        'app' : 'Co-Hand',
        'name': 'Akhdan Taufiq',
        'class': 'PBP D',
        'npm' : '2306152475',
    }

    return render(request, "main.html", context)
    ```
16. Setelah menguhubungkan views dan templates, saya mengonfigurasi routing URL dengan cara mengisi berkas `urls.py` pada direktori luar dengan kode berikut.
    ```
    from django.contrib import admin
    from django.urls import path, include
    
    urlpatterns = [
        path('admin/', admin.site.urls),
        path('', include('main.urls')),
    ]
    ```
17. Kemudian, saya menambahkan berkas `.gitigoner` untuk menentukan apa saja berkas yang perlu diabaikan git.
18. Langkah berikutnya yang saya lakukan adalah membuat akun pada PWS yang nantinya akan digunakan untuk men-deploy project django yang dibuat.
19. Lalu, saya membuat project baru pada PWS dan mendapatkan Project Credentials dan Project Command.
20. Kemudian, saya kembali ke `settings.py` dan menambahkan url deployment pada list `ALLOWED_HOST`.
    ```
    ALLOWED_HOSTS = ["localhost", "127.0.0.1", "akhdan-taufiq-cohand.pbp.cs.ui.ac.id"]
    ```
21. Setelah semua langkah project django (selain deployment) dan pembuatan project PWS selesai, saya melakukan push ke dalam repo github dengan melakukan command berikut pada direktori lokal.
    ```
    git add .
    git commit -m "finish...."
    git push origin master
    ```
22. Langkah akhir yang saya lakukan adalah menjalankan command berikut.
    ```
    git remote add pws http://pbp.cs.ui.ac.id/akhdan.taufiq/cohand
    git branch -M master
    git push pws master
    ```
23. Jika saya suatu saat ingin memperbarui web tersebut, maka saya dapat menjalankan command berikut pada terminal direktori lokal co-hand.
    ```
    git branch -M main
    git push pws main:master
    ```
24. Dengan mengikuti langkah-langkah diatas, maka deployment project django saya pun selesai.
---

### 2️⃣ Buatlah bagan yang berisi request client ke web aplikasi berbasis Django beserta responnya dan jelaskan pada bagan tersebut kaitan antara urls.py, views.py, models.py, dan berkas html!
<img src="public/djangoflow_image.png" style="width:50%; height:auto;">

---


### 3️⃣ Jelaskan fungsi git dalam pengembangan perangkat lunak!
Git dalam pengembangan perangkat lunak sangat menguntungkan developer karena membantu melacak perubahan kode, menggabungkan (merge) perubahan, membuat percabangan (branch) untuk penambahan fitur, atau bahkan memungkinkan untuk kembali ke versi sebelumnya jika diperlukan. Hal ini saat dibutuhkan dalam sebuah project yang memerlukan kolaborasi banyak developer dalam satu waktu sehingga meningkatkan efisiensi waktu.

---


### 4️⃣ Mengapa framework Django dijadikan permulaan pembelajaran pengembangan perangkat lunak?
Framework Django seringkali dijadikan permulaan pembelajaran dikarenakan menggunakan bahasa Python yang mudah dipahami sehingga membuat pemula dapat lebih fokus dalam pemrograman web. Selain itu, arsitektur MVT (Model-View-Template) pada Django yang membuat struktur aplikasi yang terorganisir, ekosistem yang matang, serta dokumentasi yang jelas membuat Django menjadi salah satu pilihan yang tepat untuk permulaan pembelajaran *software development*.

---

### 5️⃣ Mengapa model pada Django disebut sebagai ORM?
Model Django disebut ORM (Object-Relational Mapping) karena menghubungi objek Python dengan database relasional. ORM memungkinkan developer berinteraksi dengan database menggunakan kode Python, tanpa perlu menulis/menggunakan SQL secara langsung.

## 🖋Jawaban Tugas 3
 ### 1️⃣ Jelaskan mengapa kita memerlukan data delivery dalam pengimplementasian sebuah platform?

---
 ### 2️⃣ Menurutmu, mana yang lebih baik antara XML dan JSON? Mengapa JSON lebih populer dibandingkan XML?
Menurut saya, JSON (JavaScript Object Notation) lebih baik dibanding XML (eXtensible Markup Language) karena formatnya yang lebih mudah dibaca, yaitu {key:value} seperti data type dictionary pada python. Selain readability yang baik, kinerja parsing JSON juga lebih cepat dikarenakan struktur data yang sederhana serta bisa diubah menjadi objek di JavaScript tanpa memerlukan banyak langkah tambahan. Berbanding terbalik dengan XML yang memerlukan langkah lebih banyak dikarenakan adanya tag dan atribut yang kompleks. Dengan berbagai kemudahan yang diberikan oleh JSON, membuat JSON lebih populer dibandingkan XML.
 ---
 ### 3️⃣ Jelaskan fungsi dari method is_valid() pada form Django dan mengapa kita membutuhkan method tersebut?
*Method* `is_valid()` pada *form* Django memiliki peran penting dalam aspek integritas dan validasi data. Secara garis besar, method ini akan melakukan validasi menyeluruh terhadap setiap *field*. Jika terdapat kesalahan dalam proses ini, *method* ini akan me-*return* nilai *False*. Namun, jika semua validasi berhasil dilewati, maka *method* akan melakukan validasi data ke dalam atribut `cleaned_data` dari *form* dan me-*return* nilai *True*.

 ---
 ### 4️⃣ Mengapa kita membutuhkan csrf_token saat membuat form di Django? Apa yang dapat terjadi jika kita tidak menambahkan csrf_token pada form Django? Bagaimana hal tersebut dapat dimanfaatkan oleh penyerang?
`csrf_token` pada Django dibutuhkan untuk melindungi web dari serangan Cross-Site Request Forgery (CSRF). Jika kita tidak menyertakan CSRF token dalam form Django, maka permintaan POST bisa berasal dari site yang tidak sah, atau bahkan bisa saja berbahaya. Pada implementasinya, Django akan menyisipkan token ke dalam form HTML menggunakan tag template dimana tag ini akan menghasilkan input tersembunyi dengan nilai token yang unik. Token yang di-generate ini akan selalu disertakan dalam data request sehingga di saat ada permintaan POST dari form, token akan diekstrak dan dibandingkan dengan token yang disimpan di session user. Berbagai proses ini jika dilewatkan, akan memudahkan penyerang karena dapat melakukan POST request ke server tanpa sepengetahuan user.

 ---
 ### 5️⃣ Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial).
 - **Membuat input form untuk menambahkan objek model pada app sebelumnya.**
   1. Membuat berkas `forms.py ` pada direktori main.
      ```
      from django.forms import ModelForm
      from main.models import Product

      class ProductEntryForm(ModelForm):
         class Meta:
            model = Product
            fields = ["name", "price", "description"]
      ```
   2. Menambahkan import redirect pada `views.py ` agar setelah user mengisi form langsung balik ke halaman utama serta menambahkan method untuk membuat produk.
      ```
      from django.shortcuts import render, redirect
      ```
      ```
      def create_product(request):
         form = ProductEntryForm(request.POST or None)

         if form.is_valid() and request.method == "POST":
            form.save()
            return redirect('main:show_main')

         context = {'form': form}
         return render(request, "create_product.html", context)
      ```
   3. Menambahkan line berikut pada funngsi `show_main` pada `views.py` untuk mengambil seluruh produk yang di tersimpan dalam database. (data dalam database berasal dari input form)
      ```
      def show_main(request):
         products = Product.objects.all()
         context = {
            'app' : 'Co-Hand',
            'name': 'Akhdan Taufiq',
            ' class': 'PBP D',
            'npm' : '2306152475',
            'products' : products,
         }

         return render(request, "main.html", context)
      ```
   4. Menambahkan path url menuju page pengisian form
      ```
      from django.urls import path
      from main.views import show_main, create_product

      app_name = 'main'

      urlpatterns = [
         path('', show_main, name='show_main'),
         path('create-product', create_product, name='create_product'),
      ]
      ```
   5. Membuat file HTML baru didalam `main/templates` dengan nama `create_product.html` sebagai halaman form dimana object product dibuat. (NOTES: Jangan lupa untuk memasukan {% csrf_token %}
      ```
      {% extends 'base.html' %} 
      {% block content %}
      <h1>Add Your Product</h1>
      
      <form method="POST">
        {% csrf_token %}
        <table>
          {{ form.as_table }}
          <tr>
            <td></td>
            <td>
              <input type="submit" value="Add Product" />
            </td>
          </tr>
        </table>
      </form>
      
      {% endblock %}
      ```
 - **Tambahkan 4 fungsi views baru untuk melihat objek yang sudah ditambahkan dalam format XML, JSON, XML by ID, dan JSON by ID.**
   1. Menambahkan import `HttpResponse` dan  `Serializer` pada `views.py` pada direktori `main`
      ```
      from django.http import HttpResponse
      from django.core import serializers
      ```
   2. Membuat fungsi berikut di dalam `views.py` pada direktori `main`
      ```
      def show_xml(request):
         data = Product.objects.all()
         return HttpResponse(serializers.serialize("xml", data), content_type="application/xml")

      def show_json(request):
         data = Product.objects.all()
         return HttpResponse(serializers.serialize("json", data), content_type="application/json")

      def show_xml_by_id(request, id):
         data = Product.objects.filter(pk=id)
         return HttpResponse(serializers.serialize("xml", data), content_type="application/xml")

      def show_json_by_id(request, id):
         data = Product.objects.filter(pk=id)
         return HttpResponse(serializers.serialize("json", data), content_type="application/json")
      ```
 - **Membuat routing URL untuk masing-masing views yang telah ditambahkan pada poin 2.**
   1. Meng-import fungsi yang dibuat dalam `views.py` ke dalam `urls.py` di dalam direktori `main`
      ```
      from main.views import show_main, create_product, show_xml, show_json,show_json_by_id,show_xml_by_id
      ```
   2. Manambahkan path URL ke dalam urlpatterns untuk mengakses setiap fungsi yang sudah di import sebelumnya
      ```
      urlpatterns = [
          ...
          path('xml/', show_xml, name='show_xml'),
          path('json/' , show_json, name='show_json'),
          path('xml/<str:id>/', show_xml_by_id, name='show_xml_by_id'),
          path('json/<str:id>/', show_json_by_id, name='show_json_by_id'),
      ]
      ```
 ---
