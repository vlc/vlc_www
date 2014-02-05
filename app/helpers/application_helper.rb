module ApplicationHelper

  def breadcrumbs

    path = params[:path]

      count = path.split("/").count
      crumb_array = params[:path].split("/").inject([]) {|array, old| array << old.gsub("-", " ")}
      @breadcrumb = {:count => count,
                     :crumb_array => crumb_array }

  end

end
