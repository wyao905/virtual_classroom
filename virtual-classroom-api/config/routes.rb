Rails.application.routes.draw do
  resources :enrollments
  resources :messages
  resources :students
  resources :instructors
  resources :lectures
  resources :subjects
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
