async function getProducts(){
    return fetch("/json/").then((res) => res.json())
}
async function refreshProducts() {
    document.getElementById("product_cards").innerHTML = "";
    document.getElementById("product_cards").className = "";
    const products = await getProducts();
    let htmlString = "";
    let classNameString = "";

    if (products.length === 0) {
        classNameString = "flex flex-col items-center justify-center  p-8";
        htmlString = `
        <div class="flex flex-col items-center justify-center  p-8">
            <img src="/static/image/sedih-banget.png" alt="Sad face" class="w-24 h-24 mb-4"/>
            <p class="text-center text-gray-600">No products available in the store yet.</p>
        </div>
        `;
    }
    else {
        classNameString = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        products.forEach((product) => {
            const name = DOMPurify.sanitize(product.fields.name);
            const description = DOMPurify.sanitize(product.fields.description);
            htmlString += `
            <div class="bg-[#FFFAEF] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                <div class="h-48 bg-gray-200 overflow-hidden">
                    <img class="w-full h-full object-cover" src="/static/image/product_icon.png" alt="Product Image">
                </div>
                <div class="p-4 flex flex-col flex-grow">
                    <h2 class="text-lg font-bold mb-2 text-[#604B4B] line-clamp-2">${name}</h2>
                    <p class="text-xl font-bold text-[#525D42] mb-2">Rp. ${product.fields.price}</p>
                    <p class="text-[#604B4B] text-sm mb-4 flex-grow line-clamp-3">
                        ${description}
                    </p>
                    <p class="text-gray-500 text-xs mb-4">Added: ${product.fields.date_added}</p>
                    <div class="flex flex-col gap-2 mt-auto">
                        <a href="edit-product/${product.pk}" class="w-full bg-[#8FA175] hover:bg-[#76865F] text-[#FFF8E6] font-bold py-2 px-4 rounded text-center">Edit</a>
                        <a href="delete/${product.pk}" class="w-full bg-[#F05555] hover:bg-[#EF3D3D] text-[#FFF8E6] font-bold py-2 px-4 rounded text-center">Delete</a>
                    </div>
                </div>
            </div>
            `;
        });
    }
    document.getElementById("product_cards").className = classNameString;
    document.getElementById("product_cards").innerHTML = htmlString;
}
refreshProducts();

const modal = document.getElementById('crudModal');
const modalContent = document.getElementById('crudModalContent');

function showModal() {
    const modal = document.getElementById('crudModal');
    const modalContent = document.getElementById('crudModalContent');

    modal.classList.remove('hidden'); 
    setTimeout(() => {
      modalContent.classList.remove('opacity-0', 'scale-95');
      modalContent.classList.add('opacity-100', 'scale-100');
    }, 50); 
}

function hideModal() {
    const modal = document.getElementById('crudModal');
    const modalContent = document.getElementById('crudModalContent');

    modalContent.classList.remove('opacity-100', 'scale-100');
    modalContent.classList.add('opacity-0', 'scale-95');

    setTimeout(() => {
      modal.classList.add('hidden');
    }, 150); 
}

document.getElementById("cancelButton").addEventListener("click", hideModal);
document.getElementById("closeModalBtn").addEventListener("click", hideModal);

function addProductEntry() {
    fetch("create-product-entry-ajax/", {
      method: "POST",
      body: new FormData(document.querySelector('#productEntryForm')),
    })
    .then(response => refreshProducts())

    document.getElementById("productEntryForm").reset(); 
    document.querySelector("[data-modal-toggle='crudModal']").click();
    hideModal();

    return false;
}

document.getElementById("productEntryForm").addEventListener("submit", (e) => {
    e.preventDefault();
    addProductEntry();
})