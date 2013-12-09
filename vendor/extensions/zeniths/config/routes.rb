Refinery::Core::Engine.routes.append do

  # Frontend routes
  namespace :zeniths do
    resources :zeniths, :path => '', :only => [:index, :show]
  end

  # Admin routes
  namespace :zeniths, :path => '' do
    namespace :admin, :path => 'refinery' do
      resources :zeniths, :except => :show do
        collection do
          post :update_positions
        end
      end
    end
  end

end
