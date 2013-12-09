Refinery::Core::Engine.routes.append do

  # Frontend routes
  namespace :add_pages do
    resources :add_pages, :path => '', :only => [:index, :show]
  end

  # Admin routes
  namespace :add_pages, :path => '' do
    namespace :admin, :path => 'refinery' do
      resources :add_pages, :except => :show do
        collection do
          post :update_positions
        end
      end
    end
  end

end
