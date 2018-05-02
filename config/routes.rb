Rails.application.routes.draw do
  # For details on the DSL available within this file, see http:o//guides.rubyonrails.org/routing.html
  root "pages#home"
  get 'about', to:"pages#about"
  get 'mybooks', to: "books#mybooks"
  get 'books/all', to: "books#index"
  get 'books/show/:id', to: "books#show"
  get 'books/new', to: "books#new"
  get 'books/edit/:id', to: "books#edit"

  get 'users/all', to: "users#index"
  get 'users/show/:id', to: "users#show"
  get 'users/new', to: "users#new"
  get 'users/edit/:id', to: "users#edit"
  get 'myprofile', to: "users#myprofile"

  get 'login', to: "sessions#new"
  get 'logout', to: "sessions#destroy"
end
