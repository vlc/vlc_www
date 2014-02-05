module ApplicationHelper

  def breadcrumbs

    path = params[:path]

    count = path.split("/").count
    old_crumb_array = params[:path].split("/")
    new_crumb_array = params[:path].split("/").inject([]) {|array, old| array << old.gsub("-", " ")}
    @breadcrumb = {:count => count,
                   :old_crumb_array => old_crumb_array,
                   :new_crumb_array => new_crumb_array}

  end

end
