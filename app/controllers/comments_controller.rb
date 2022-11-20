class CommentsController<ActionController::Base
  def new
    redirect_to "/"
  end

  def create
    @user = User.find(params[:user_id])
    @comment = Comment.create({photo_id: params[:comment][:photo_id], user_id: params[:user_id], comment: params[:comment][:comment]})
    redirect_to user_path(session[:user_id])
  end

  def show
  end




end
