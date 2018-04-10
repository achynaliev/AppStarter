class Api::ProjectSearchesController < ApplicationController

  def index
    project_categories = []#['tech', 'technology', 'design' , 'gadgets', 'gadget']

    if project_categories.include(search_params.downcase)
      # if search_params.include("tech")
      #   @projects = Project.find_by
    elsif
      @projects = Project.search_project(search_params.downcase)
    else
      @projects = {}
    end

    return @projects
  end

  private

  def search_params
    params.require(:search).permit(:query)
  end

end
