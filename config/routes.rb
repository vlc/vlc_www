VLC::Application.routes.draw do

  # This line mounts Refinery's routes at the root of your application.
  # This means, any requests to the root URL of your application will go to Refinery::PagesController#home.
  # If you would like to change where this extension is mounted, simply change the :at option to something different.
  #
  # We ask that you don't use the :as option here, as Refinery relies on it being the default of "refinery"
  resources :quick_contacts do
    collection do
      get :create_quick_contact
      get :save_news_letters_email
    end
  end
  resources :site_map
  mount Refinery::Core::Engine, :at => '/'
  Refinery::Core::Engine.routes.draw do
    root :to => 'pages#home', :via => :get
    post 'pages/preview'     => 'pages#preview', :as => :preview_pages
    match 'pages/*path/preview' => 'pages#preview', :as => :preview_page,  :via => [:get, :put]
    get '/pages/:id', :to => 'pages#show', :as => :page

    namespace :admin, :path => 'refinery' do
      get 'pages/*path/edit', :to => 'pages#edit'
      get 'pages/*path/children', :to => 'pages#children', :as => 'children_pages'
      put 'pages/*path', :to => 'pages#update'
      delete 'pages/*path', :to => 'pages#destroy'
      resources :pages, :except => :show do
        post :update_positions, :on => :collection
      end

      resources :pages_dialogs, :only => [] do
        collection do
          get :link_to
          get :test_url
          get :test_email
        end
      end

      resources :page_parts, :only => [:new, :create, :destroy]
    end

    get '/news/item/id/22.html' => redirect("/company/news/zenith-airport-link-forecasts")
    get '/news/item/id/26.html' => redirect("/company/news/zenith-airport-link-forecasts-update")
    get '/news/item/id/27.html' => redirect("/company/news/incorrect-reporting-by-afr")
  end
  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => 'welcome#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
end
